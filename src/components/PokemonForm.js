import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }


  handleSubmit= (evt) => {
    console.log(evt.target.name.value)
const name = evt.target.name.value
const hp = evt.target.hp.value
const frontUrl= evt.target.frontUrl.value
const backUrl = evt.target.backUrl.value

   fetch('http://localhost:3000/pokemon',{
     method: "POST",
     headers: {
       'Content-Type' : 'application/json',
       'accept' : 'application/json'
     },
     body: JSON.stringify({
       height: 6,
       weight: 210,
       abilities: ["sageMode", "foxMode"],
      moves: ["shadowClones", "rasengan","resenshuriken"],
      types: ["ninjas"],
      stats:[{value: 100 ,name: "special-attack"},{value: 1000 ,name: "speed"}, {value: 100 ,name: "attack"}, {value: 100 ,name: "hp"}, {value: 100 ,name: "defense"}, {value: 100 ,name: "special-defense"} ],
       name: name,
       hp: hp,
       sprites:{

         front: frontUrl,
         back: backUrl
       }

     })
   })
   .then(r => r.json())
   .then(rjson => {
     console.log(rjson)
   })
    
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
