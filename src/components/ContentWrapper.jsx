import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import Table from './Table';


function ContentWrapper(){
    const genres =["Acción", "Animación", "Aventura","Ciencia Ficción", "Comedia", "Documental", "Drama", "Fantasia", "Infantiles", "Musical"]
    return (
        <React.Fragment>
           <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <ContentRowTop genres={genres}/>
                    <Table />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;