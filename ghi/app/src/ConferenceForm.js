import React, { useEffect, useState } from 'react';

function ConferenceForm (props) {

    const [formData, setFormData] = useState({
        name: '',
        starts: '',
        ends: '',
        description: '',
        max_presentations: '',
        max_attendees: '',
        location: '',
    })

    // const [name, setName] = useState('')
    // const [starts, setStarts] = useState(Date)
    const handleSubmit = async (event) => {
        event.preventDefault();
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const url = 'http://localhost:8000/api/conferences/'
        const response = await fetch(url, fetchConfig)
        console.log(response)
        if(response.ok) {
            setFormData({
                name: '',
                starts: '',
                ends: '',
                description: '',
                max_presentations: '',
                max_attendees: '',
                location: '',
            })
        }
        console.log(formData)
    }


        // make a fetch call to the endpoint
        // create fetch config object that has map header and body keys
        //if response is ok call setFormData

    const fetchData = async () => {
        const url = 'http://localhost:8000/api/locations/';
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();

            const selectTag = document.getElementById('location');
            for (let location of data.locations) {
                const optionElement = document.createElement('option');
                optionElement.value = location.id;
                optionElement.innerHTML = location.name;
                selectTag.appendChild(optionElement);
            }
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleInputChange = (event) => {
        const value = event.target.value;
        const inputName = event.target.name;
        setFormData({
            ...formData,
            [inputName]: value,
        })
    }



    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new conference</h1>
            <form onSubmit={handleSubmit} id="create-conference-form">
              <div className="form-floating mb-3">
                <input onChange={handleInputChange} value={formData.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleInputChange} value={formData.starts} placeholder="starts" required type="datetime-local" name="starts" id="starts" className="form-control" />
                <label htmlFor="starts">Starts</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleInputChange} value={formData.ends} placeholder="ends" required type="datetime-local" name="ends" id="ends" className="form-control" />
                <label htmlFor="ends">Ends</label>
              </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea onChange={handleInputChange} value={formData.description} className="form-control" name="description" id="description" rows="3"></textarea>
                </div>
              <div className="form-floating mb-3">
                <input onChange={handleInputChange} value={formData.max_presentations} placeholder="max_presentations" required type="number" min="1" max="5" name="max_presentations" id="max_presentations" className="form-control" />
                <label htmlFor="max_presentations">Maximum Presentations</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleInputChange} value={formData.max_attendees} placeholder="max_attendees" required type="number" min="1" max='1000' name="max_attendees" id="max_attendees" className="form-control" />
                <label htmlFor="max_attendees">Maximum Attendees</label>
              </div>
              <div className="mb-3">
                <select onChange={handleInputChange} value={formData.location} required name="location" id="location" className="form-select">
                  <option value="location">Location</option>
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default ConferenceForm;
