function gettrains(){

    const data=[
         {'Train_No':1001,'Train_Name':"Shatabdi Express","Source":"Bangalore","Destination":"Delhi","Ticket_Price":2500},
    {'Train_No':1002,'Train_Name':"Shatabdi Express","Source":"Delhi","Destination":"Bangalore","Ticket_Price":2500},
    {'Train_No':1003,'Train_Name':"Udyan Express","Source":"Bangalore","Destination":"Mumbai","Ticket_Price":2500},
    {'Train_No':1004,'Train_Name':"Udyan Express","Source":"Mumbai","Destination":"Bangalore","Ticket_Price":2500},
    {'Train_No':1005,'Train_Name':"Brindavan Express","Source":"Bangalore","Destination":"Chennai","Ticket_Price":2500},
    {'Train_No':1006,'Train_Name':"Brindavan Express","Source":"chennai","Destination":"Bangalore","Ticket_Price":2500},
    ];

    const div=document.getElementById("train_details");

    const table=document.createElement('table')

    const headrow=document.createElement('tr')

    const cell=document.createElement('th')
    cell.innerHTML="Train_No"
    headrow.appendChild(cell);
    const cell1=document.createElement('th')
    cell.innerHTML="Teain_Name";
    headrow.appendChild(cell1);
    const cell2=document.createElement('th')
    cell.innerHTML="Source";
    headrow.appendChild(cell2);
    const cell3=document.createElement('th')
    cell.innerHTML="Destination";
    headrow.appendChild(cell3);
    const cell4=document.createElement('th')
    cell.innerHTML="Ticket_Price";
    headrow.appendChild(cell4);

    table.appendChild(headrow);

    for(let x in data){
        
        let obj=data[x];
        
        const headrow=document.createElement('tr');
        const cell1 = document.createElement('td');
        cell1.innerHTML = obj.Train_No;
        const cell2 = document.createElement('td');
        cell2.innerHTML = obj.Train_Name;
        const cell3 = document.createElement('td');
        cell3.innerHTML = obj.Source;
        const cell4 = document.createElement('td');
        cell3.innerHTML = obj.Destination;
        const cell5 = document.createElement('td');
        cell3.innerHTML = obj.Ticket_Price;


        headrow.appendChild(cell1);
        headrow.appendChild(cell2);
        headrow.appendChild(cell3);
        headrow.appendChild(cell4);
        headrow.appendChild(cell5);

        table.appendChild(headrow);
    }

    div.appendChild(table);

    table.classList.add("table");
    table.classList.add("table-striped");
}