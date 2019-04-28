import React, {Fragment} from 'react';


const OldMainPage = () => {

  return(
    <Fragment>
      <div style={{"borderStyle": "solid", "borderWidth": "3px", "borderRadius": "5px", "borderColor": "blue"}}>


          <em>Old Main Page - from backend/app/views/pages/main.erb</em>


          <h1>Welcome to Friendly Character Generator!</h1>

          <h2>This is the 'pages#main' view.</h2>

          <h2 style={{color: "red"}}>WARNING: This view will be deprecated
            to make room for Javascript/React index.html page!!</h2>

          <h3>Users</h3>
          <p>Create User/Login (navbar?)</p>

          <h3>Characters</h3>
          <p>Create Character (link?)</p>

          <h3>Archetypes</h3>
          <p>Create Archetype (admin only?)</p>


          <div id="form-container">
          </div>

      </div>
    </Fragment>
  )

}


export default OldMainPage
