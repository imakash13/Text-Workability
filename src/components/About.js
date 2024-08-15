import React from 'react'

export default function About(props) {

    const btnStyle = {
        backgroundColor: props.mode === 'dark' ? '#115664' : 'white',
        color: props.mode === "light" ? "black" : "#dcdcdc"
    }

    const divStyle = {
        backgroundColor: props.mode === 'dark' ? '#6c757d' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black'
    }

    return (
        <>
            <h2 className={`container my-3 text-${props.mode === 'light' ? 'black' : 'white'}`}>About Us</h2>
            <div className="accordion container " id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne" >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={btnStyle}>
                            <strong>About Website</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={divStyle}>
                            This website is designed to manipulate the text that is written in the textarea. Here you can convert your text from Uppercase to LowerCase and from LowerCase to UpperCase and also convert your text to Capitalized form. There are some more feartures that you must know and that is in this website you can also extract email id's and can convert your text into speech.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={btnStyle}>
                            <strong>Easy to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={divStyle}>
                            This website is very easy to use. You just have to drop your text and now you can simply perform following tasks on your text :-
                            UpperCase to LowerCase | LowerCase to UpperCase | Capitalized | Copy text | Speak it loud | Remove extra spaces | Fetch email id's | And many more to come.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={btnStyle}>
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={divStyle}>
                            It is all free of cost , no charge will apply to perform any task.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
