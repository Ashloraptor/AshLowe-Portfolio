import React from 'react';

const projects = [
  {
    id: 1,
    title: "e-commerce-connect Repo",
    description: "Object-Relational-Mapping",
    repoLink: "https://github.com/Ashloraptor/e-commerce-connect",
    deployedLink: "https://drive.google.com/file/d/1P34SMvfi91am0Cc3l_IqjNe0vbM8KsJ8/view",
  },
  {
    id: 2,
    title: "Employee Tracker",
    description: "SQL",
    repoLink: "https://github.com/Ashloraptor/Employee-Tracker",
    deployedLink: "https://drive.google.com/file/d/1EDjK2w3_8LLa2TSpbgfvpuj_030tdmBu/view",
  },
  {
    id: 3,
    title: "AshLowe-Portfolio",
    description: "React",
    repoLink: "https://github.com/Ashloraptor/AshLowe-Portfolio",
    deployedLink: "https://github.com/Ashloraptor/AshLowe-Portfolio",
  },
  {
    id: 4,
    title: "Whether the Weather be Weathering",
    description: "Server-side APIs",
    repoLink: "https://github.com/Ashloraptor/Whether_the_Weather_be_Weathering",
    deployedLink: "https://ashloraptor.github.io/Whether_the_Weather_be_Weathering/",
  },
  {
    id: 5,
    title: "Compendium 1.0",
    description: "NoSQL",
    repoLink: "https://github.com/Ashloraptor/Compendium",
    deployedLink: "https://compendium-256a42904ce0.herokuapp.com/",
  },
  {
    id: 6,
    title: "Bunny-foot Post",
    description: "NoSQL",
    repoLink: "https://github.com/Ashloraptor/Bunnyfoot-Post",
    deployedLink: "https://drive.google.com/file/d/15rByjqyKtyHeOw2i6kUZA99-hGm0Ni3Z/view",
  }
];



// export default function Portfolio() {
//   return (
//     <div className="container pt-4">
//       <section className="features-icons bg-light text-center m-4">
//         <div className="container">
//           <div className="row p-2">
//             <div className="col-lg-4">
//               <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
//                 <div className="features-icons-icon d-flex">
//                   <i className="bi-window m-auto text-primary" />
//                 </div>
//                 <h3>Object-Relational-Mapping</h3>
//                 <a href="https://github.com/Ashloraptor/e-commerce-connect" className="lead mb-0">
//                   e-commerce-connect Repo
//                 </a>
//                 <br />
//                 <a href="https://drive.google.com/file/d/1P34SMvfi91am0Cc3l_IqjNe0vbM8KsJ8/view" className="lead mb-0">e-commerce-connect Demo</a>
//               </div>
//             </div>

//             <div className="col-lg-4">
//               <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
//                 <div className="features-icons-icon d-flex">
//                   <i className="bi-layers m-auto text-primary" />
//                 </div>
//                 <h3 >SQL</h3>
//                 <a href="https://github.com/Ashloraptor/Employee-Tracker" className="lead mb-0">
//                   Employee Tracker Repo
//                 </a>
//                 <br />
//                 <a href="https://drive.google.com/file/d/1EDjK2w3_8LLa2TSpbgfvpuj_030tdmBu/view" className="lead mb-0">Employee Tracker Demo</a>
//               </div>
//             </div>

//             <div className="col-lg-4">
//               <div className="features-icons-item mx-auto mb-0 mb-lg-3">
//                 <div className="features-icons-icon d-flex">
//                   <i className="bi-terminal m-auto text-primary" />
//                 </div>
//                 <h3>React</h3>
//                 <a href="https://github.com/Ashloraptor/AshLowe-Portfolio" className="lead mb-0">
//                   AshLowe-Portfolio
//                 </a>
//               </div>
//             </div>

//             <div className="col-lg-4">
//               <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
//                 <div className="features-icons-icon d-flex">
//                   <i className="bi-layers m-auto text-primary" />
//                 </div>
//                 <h3 >Server-Side APIs</h3>
//                 <a href="https://github.com/Ashloraptor/Whether_the_Weather_be_Weathering" className="lead mb-0">
//                   Whether the Weather be Weathering Repo
//                 </a>
//                 <br />
//                 <a href="https://ashloraptor.github.io/Whether_the_Weather_be_Weathering/" className="lead mb-0">Whether the Weather be Weathering</a>
//               </div>
//             </div>

//             <div className="col-lg-4">
//               <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
//                 <div className="features-icons-icon d-flex">
//                   <i className="bi-layers m-auto text-primary" />
//                 </div>
//                 <h3 >NoSQL</h3>
//                 <a href="https://github.com/Ashloraptor/Compendium" className="lead mb-0">
//                   Compendium 1.0 Repo
//                 </a>
//                 <br />
//                 <a href="https://compendium-256a42904ce0.herokuapp.com/" className="lead mb-0">Compendium 1.0 Link</a>
//               </div>
//             </div>

//             <div className="col-lg-4">
//               <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
//                 <div className="features-icons-icon d-flex">
//                   <i className="bi-layers m-auto text-primary" />
//                 </div>
//                 <h3 >NoSQL</h3>
//                 <a href="https://github.com/Ashloraptor/Bunnyfoot-Post" className="lead mb-0">
//                   Bunnyfoot-Post Repo
//                 </a>
//                 <br />
//                 <a href="https://drive.google.com/file/d/15rByjqyKtyHeOw2i6kUZA99-hGm0Ni3Z/view" className="lead mb-0">Bunnyfoot-Post Demo</a>
//               </div>
//             </div>



//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


function Portfolio() {
  return (
    <div className="container pt-4">
      <section className="features-icons bg-light text-center m-4">
        

                <div className="project-list">

                <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>

                
                  {projects.map(project => (
                    <div className="project" key={project.id}>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <a href={project.repoLink}>Github Repo</a>
                      <br />
                      <a href={project.deployedLink}>Deployed Link/Demo</a>
                    </div>
                   
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>
    </div>
  );
}

export default Portfolio;