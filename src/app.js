const app = {
    title: 'React Fun',
    subtitle: 'ertret',
    options:['one', 'two']
};
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {(app.options && app.options.length > 0) ? 
            (<ol>
                <li>{app.options[0]}</li>
                <li>{app.options[1]}</li>
            </ol>)
            : 'no options'}
    </div>
    
    );

const user = {
    name: 'Ahmad Asiri',
    age: 30,
    location: ''
};

function getLocation(location){
    if(location){
        return <h3>location : {location}</h3>;
    }else{
        return <h3>location : Unknown</h3>;
    }    
}

const template2 = (
    <div>
        <h1>name : {user.name ? user.name : 'unknown'}</h1>
        {(user.age >= 18) && <h2>age : {user.age}</h2>}
        {getLocation(user.location)}
    </div>
    
    );
    


    const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);                             