from flask import jsonify
import jwt
import datetime
import os 

def response_json(value, status, error):
	return jsonify({ "header": { "status": status, "error": error }, "data" : value })

def response_200(content):
	return response_json(content, 'HTTP_200_OK', 'HTTP_200_OK'), 200

def response_401(token):
	return response_json(None, 'HTTP_401_UNAUTHORIZED', token), 401

def response_500(exception):
	return response_json(None, 'HTTP_500_INTERNAL_SERVER_ERROR', str(exception)), 500

def verify_token(auth_token, config):
	try:
		payload = jwt.decode(auth_token, config.get('SECRET_KEY'))
		return True, payload['sub']
	except jwt.ExpiredSignatureError:
		return False, 'Expired token'
	except jwt.InvalidTokenError:
		return False, 'Invalid token'
		
def generate_token(uid, config):
	payload = {
		'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, hours=1, seconds=0),
		'iat': datetime.datetime.utcnow(),
		'sub': uid
	}
	return jwt.encode(
		payload,
		config.get('SECRET_KEY'),
		algorithm='HS256'
	)