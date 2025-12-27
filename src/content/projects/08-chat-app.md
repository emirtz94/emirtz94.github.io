---
title: Chat Application
description: Real-time messaging app with rooms, file sharing, and notifications.
tags: [Socket.io, Node.js, Redis]
github: https://github.com/username/chat-app
order: 8
---

A real-time chat application supporting both private messages and group conversations. Socket.io enables bidirectional communication with automatic reconnection and fallback to polling.

Redis serves as both a message broker for scaling across multiple server instances and a cache for recent messages. The pub/sub pattern ensures messages reach all connected clients instantly.

Features include typing indicators, read receipts, file attachments, emoji reactions, and message search. Push notifications keep users informed even when the app is in the background.
