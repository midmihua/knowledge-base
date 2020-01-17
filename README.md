## knowledge-base

### TBD

### MongoDB

#### 1. Verify if mongodb is up and running

```js
sudo systemctl start mongod
```
```js
sudo systemctl status mongod
```

Output example:
```
● mongod.service - High-performance, schema-free document-oriented database
   Loaded: loaded (/lib/systemd/system/mongod.service; disabled; vendor preset: enabled)
   Active: active (running) since пт 2020-01-17 22:28:25 EET; 4s ago
     Docs: https://docs.mongodb.org/manual
 Main PID: 15063 (mongod)
    Tasks: 3
   Memory: 265.9M
      CPU: 1.710s
   CGroup: /system.slice/mongod.service
           └─15063 /usr/bin/mongod --config /etc/mongod.conf
```