import app from "./app"
app.set('puerto',4000);

app.listen(app.get('puerto'), () => {
    console.log('Servidor en puerto', app.get('puerto'));
});