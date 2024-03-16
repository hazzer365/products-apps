class Prodcut{
     constructor(name, price, quantity, date){
        this.name=name;
        this.price=price;
        this.quantity=quantity;
        this.date=date;
     }
}

class UI{
    showMessage(message, cssClass){
        const element = document.createElement('div');
        element.className=`alert alert-${cssClass} mt-2`
        element.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(element, app);
        setTimeout(function(){
            document.querySelector('alert').remove();
        },3000);

    }
}

//Tarea hacer la alerta para cuando no escribas nada te salga la alerta
//recibir los datos de los input
//imprimirlos en laconsolas
//al dar click ens ave que aparezca la alerta verde
// pero si el usuario no ingresa nada
//y le da click a save
//imprimir la alerta roja con la clase "danger"
document.getElementById('product-form').addEventLsitener('submit',function(e){
    e.preventDefault();
    const ui=new UI();
    ui.showMessage('Product added successfull', 'success');

});