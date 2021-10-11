Use command `npm start` to run the app in development.

## Deploying

To deploy the the app run:

```bash
$ cat docker-compose.prod.yml | ssh deploy@proxy.poweredbyhuddle.com.au docker stack deploy --prune -c - shareable_dashboard_frontend

Updating service shareable_dashboard_frontend_app (id: mrsisw1f22eh3ty4og8auvd3d)
```

## Debugging

To run the app in the debugger, start the app and run the `Launch Chrome against localhost` task.
