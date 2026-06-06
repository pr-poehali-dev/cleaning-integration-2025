import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта на email arenda-chistoty.ru@yandex.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    service = body.get('service', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'}, ensure_ascii=False)
        }

    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    email_to = 'arenda-chistoty.ru@yandex.ru'
    email_from = 'arenda-chistoty.ru@yandex.ru'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта — {name}'
    msg['From'] = email_from
    msg['To'] = email_to

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; background: #f9f9f9; padding: 24px; border-radius: 12px;">
        <h2 style="color: #00c896; margin-bottom: 20px;">🧹 Новая заявка с сайта</h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 10px 0; color: #666; width: 130px;">Имя:</td>
                <td style="padding: 10px 0; font-weight: bold; color: #333;">{name}</td>
            </tr>
            <tr style="background: #f0f0f0; border-radius: 6px;">
                <td style="padding: 10px; color: #666;">Телефон:</td>
                <td style="padding: 10px; font-weight: bold; color: #333;">
                    <a href="tel:{phone}" style="color: #00c896; text-decoration: none;">{phone}</a>
                </td>
            </tr>
            <tr>
                <td style="padding: 10px 0; color: #666;">Услуга:</td>
                <td style="padding: 10px 0; font-weight: bold; color: #333;">{service if service else 'Не указана'}</td>
            </tr>
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #e8faf4; border-radius: 8px; border-left: 4px solid #00c896;">
            <p style="margin: 0; color: #333; font-size: 14px;">Перезвоните клиенту в течение 15 минут 📞</p>
        </div>
    </div>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
        server.login(email_from, smtp_password)
        server.sendmail(email_from, email_to, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }