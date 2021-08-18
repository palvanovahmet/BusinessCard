function ProjectComponents() {
    const projects = [{
        name : 'nameofProject',
        image : 'text'
    }, 
    
    {
        name: 'name',
        image : 'image'
    }];
    
    function Unknown(data) {
        return(
            <div>
                <div class="project__container">
                 { data.image }

                
                </div> 

                <p>
                    { data.name }
                </p>
            </div>
            
            
        );
    }

    return(
        <div>
            <div class="projects">
                {projects.map(Unknown)}
                
               
            </div>
        </div> 
    );
}

export default ProjectComponents;