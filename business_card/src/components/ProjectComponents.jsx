function ProjectComponents() {
    const projectsObject = [

        {
            fullName : 'FirstProject',
            image : 'source:pidrila.com'
        },
        
        
        {
            fullName: 'SecondProject',
            image : 'dolbitsya in ass'
        },

        {
            fullName: 'ThirdProject',
            image : 'lol'
        },

        {
            fullName : 'FirstProject',
            image : 'source:pidrila.com'
        },
        
        
        {
            fullName: 'SecondProject',
            image : 'dolbitsya in ass'
        },

        {
            fullName: 'ThirdProject',
            image : 'lol'
        },

        {
            fullName : 'FirstProject',
            image : 'source:pidrila.com'
        },
        
        
        {
            fullName: 'SecondProject',
            image : 'dolbitsya in ass'
        },

        {
            fullName : 'FirstProject',
            image : 'source:pidrila.com'
        },
        
        
        {
            fullName: 'SecondProject',
            image : 'dolbitsya in ass'
        },

        {
            fullName: 'ThirdProject',
            image : 'lol'
        },

        {
            fullName : 'FirstProject',
            image : 'source:pidrila.com'
        },
        
        
        {
            fullName: 'SecondProject',
            image : 'dolbitsya in ass'
        },

        {
            fullName: 'ThirdProject',
            image : 'lol'
        },

        {
            fullName : 'FirstProject',
            image : 'source:pidrila.com'
        }
    ];
    
    let projects = 
    projectsObject.map( elements =>  {
        return (
            <div className="project__container">
                <div className="elementsName">{elements.fullName} <br/> {elements.image}</div>
            </div>  
        )
    });

     return(
        <div>
            <div class="projects">
                
                { projects }           

            </div>
        </div> 
    );
}

export default ProjectComponents;