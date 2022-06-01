function Card(props) {
    console.log('props===', props);
    // jei isLarge === true tai pridedam klase 'text-large' jei ne tai ne
    // jei kortele turi klase dark tai tada ji yra tamsiu fonu ir sviesiom raidem
    // korteles dark mode sprendia propsai <Card dark> 
    const isLarge = true;
    const isDarkModeOn = props.dark;
    console.log('isDarkModeOn===', isDarkModeOn);
    // calculate class using variable
    const cardClasses = isDarkModeOn ? 'card dark' : 'card';
    // calculate class using function
    function calculateCardClass() {
        let resClass = 'card'
        if (isDarkModeOn) {
            resClass += ' dark';
        }
        return resClass;
    }
    return (
        <div className={cardClasses}>
            <p>isLarge: {isLarge.toString()}</p>
            <h2 className="card-title" >Card title</h2>
            <p className={isLarge ? 'text-large' : ''} >This is card body</p>
            <button>Read more</button>
        </div>
    )
}

export default Card;
