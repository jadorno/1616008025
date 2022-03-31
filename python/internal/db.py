from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()


class assets_physical(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String(80), nullable=True)
	classification = db.Column(db.String(80), nullable=True)
	type = db.Column(db.String(80), nullable=True)
	owner = db.Column(db.String(80), nullable=True)
	group = db.Column(db.String(80), nullable=True)
	assigned = db.Column(db.String(80), nullable=True)
	manufacturer = db.Column(db.String(80), nullable=True)
	model = db.Column(db.String(80), nullable=True)
	serial = db.Column(db.String(80), nullable=True)
	building = db.Column(db.String(80), nullable=True)
	room = db.Column(db.String(80), nullable=True)
	description = db.Column(db.String(80), nullable=True)
	usf_tag = db.Column(db.String(80), nullable=True)
	purchase_date = db.Column(db.String(80), nullable=True)
	warranty_end = db.Column(db.String(80), nullable=True)
	status = db.Column(db.String(80), nullable=True)
	created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
	updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)

	def __repr__(self):
		return '<Asset.Physical %r>' % self.name


class assets_physical_computers(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	cpu = db.Column(db.String(80), nullable=True)
	gpu = db.Column(db.String(80), nullable=True)
	processor = db.Column(db.String(80), nullable=True)
	memory = db.Column(db.String(80), nullable=True)
	primary_mac = db.Column(db.String(80), nullable=True)
	os = db.Column(db.String(80), nullable=True)
	storage = db.Column(db.String(80), nullable=True)
	admin_user = db.Column(db.String(80), nullable=True)
	created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
	updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)

	asset_id = db.Column(db.Integer, db.ForeignKey('assets_physical.id'), nullable=False)
	asset = db.relationship('assets_physical', backref=db.backref('computer', lazy='dynamic'))

	def __repr__(self):
		return '<Asset.Computer %r>' % self.name

class assets_physical_servers(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	ip = db.Column(db.String(80), nullable=True)
	fqdn = db.Column(db.String(80), nullable=True)
	rack_id = db.Column(db.String(80), nullable=True)
	network_access = db.Column(db.String(80), nullable=True)
	created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
	updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)

	asset_id = db.Column(db.Integer, db.ForeignKey('assets_physical.id'), nullable=False)
	asset = db.relationship('assets_physical', backref=db.backref('server', lazy='dynamic'))

	def __repr__(self):
		return '<Asset.Server %r>' % self.name


class assets_physical_transfers(db.Model):
	id = db.Column(db.Integer, primary_key=True)

	transfer_condition = db.Column(db.String(80), nullable=True)
	transfer_staff = db.Column(db.String(80), nullable=True)
	transfer_student = db.Column(db.String(80), nullable=True)
	transfer_department = db.Column(db.String(80), nullable=True)
	transfer_date = db.Column(db.DateTime, nullable=True)
	created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
	updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)

	asset_id = db.Column(db.Integer, db.ForeignKey('assets_physical.id'), nullable=False)
	asset = db.relationship('assets_physical', backref=db.backref('transfer', lazy='dynamic'))

	def __repr__(self):
		return '<Asset.Decommissioned %r>' % self.name


class assets_physical_supplemental(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String(80), nullable=False)
	value = db.Column(db.String(80), nullable=True)
	file = db.Column(db.String(80), nullable=True, default=None)
	created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
	updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)

	asset_id = db.Column(db.Integer, db.ForeignKey('assets_physical.id'), nullable=False)
	asset = db.relationship('assets_physical', backref=db.backref('supplemental', lazy='dynamic'))

	def __repr__(self):
		return '<Asset.Supplemental %r>' % self.name

class assets_physical_logs(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	msg = db.Column(db.String(80), nullable=False)
	created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

	user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
	asset_id = db.Column(db.Integer, db.ForeignKey('assets_physical.id'), nullable=False)
	asset = db.relationship('assets_physical', backref=db.backref('logs', lazy='dynamic'))

	def __repr__(self):
		return '<Asset.Log %r>' % self.created_at


class assets_virtual(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String(80), nullable=True)
	classification = db.Column(db.String(80), nullable=True)
	type = db.Column(db.String(80), nullable=True)
	group = db.Column(db.String(80), nullable=True)
	user = db.Column(db.String(80), nullable=True)
	host = db.Column(db.String(80), nullable=True)
	port = db.Column(db.String(80), nullable=True)
	network_access = db.Column(db.String(80), nullable=True)
	expiration_date = db.Column(db.DateTime, nullable=False)
	status = db.Column(db.String(80), nullable=True)
	created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
	updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)

	def __repr__(self):
		return '<Asset.Virtual %r>' % self.name


class users(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	username = db.Column(db.String(80), nullable=False)
	password = db.Column(db.String(80), nullable=False)
	role = db.Column(db.String(80), nullable=True, default='user-view')
	created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
	updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

	def __repr__(self):
	    return '<User %r>' % self.username
