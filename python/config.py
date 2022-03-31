#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import server

bind = '0.0.0.0:80'
workers = 4
loglevel = "info"
preload_app = True

# Server Hooks
# on_starting = server.on_starting