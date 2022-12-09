import React, { useState } from 'react'
import { useCandidatesContext } from '../hooks/useCandidatesContext'


const CandidatesModal = ({ showCandidateModal, setShowCandidateModal }) => {
    const { candidates, dispatch } = useCandidatesContext()

    const [name, setName] = useState('')
    const [department, setDepartment] = useState('')
    const [age, setAge] = useState(null)
    const [campaignPromise, setCampaignPromise] = useState(null)
    const [profilePicture, setProfilePicture] = useState(null)
    const [error, setError] = useState(null)

    const candidateVotes = 0;

    const handleSubmit = async (e) => {
        e.preventDefault()

        const candidate = { name, department, age, campaignPromise, candidateVotes }

        
        const response = await fetch('/api/candidates', {
            method: 'POST',
            body: JSON.stringify(candidate),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok) {
            setName('')
            setDepartment('')
            setAge('')
            setCampaignPromise('')
            setProfilePicture('')
            setError(null)
            console.log("New Candidate Created", json)
            dispatch({type: 'CREATE_CANDIDATE', payload: json })
        }
        
    }
    

  return (
    <>{showCandidateModal ? <div className='bg-white w-full h-full rounded-2xl'>
        <div className="p-7 z-10 relative" id="hero-first" showCandidateModal={showCandidateModal}>
            <form className='w-9/12' onSubmit={handleSubmit}>                
                <div className="flex items-center my-3">
                    <label for="student-name" className='font-bold'>Candidate's Name:</label><input type="text" onChange={(e) => setName(e.target.value)} value={name} id="student-name" name="student-name" placeholder="Student Name" className='px-5 py-2 rounded-xl ml-48' />
                </div>
                <div className="flex items-center my-3">
                    <label for="student-department" className='font-bold'>Candidate's Department:</label><input type="text" onChange={(e) => setDepartment(e.target.value)} value={department} id="student-department" name="student-department" placeholder="Student Department" className='px-5 py-2 rounded-xl ml-48' />
                </div>
                <div className="flex items-center my-3">
                    <label for="student-age" className='font-bold'>Candidate's Age</label><input type="number" onChange={(e) => setAge(e.target.value)} value={age} id="student-age" name="student-age" placeholder="Student Age" className='px-5 py-2 rounded-xl ml-48'/>
                </div>
                <div className="items-center my-3">
                    <label for="campaign-promise" className='font-bold'>Candidate's Campaign Promise</label><br /><textarea onChange={(e) => setCampaignPromise(e.target.value)} value={campaignPromise} name="campaign-promise" id="campaign-promise" cols="30" rows="10" placeholder='Tell us your future' maxlength="300" minlength="5" className='ml-48 rounded-xl px-5 py-2'></textarea>
                </div>
                <label for="profile-pic">Student Profile Picture</label>
                <input type="file" onChange={(e) => setProfilePicture(e.target.value)} value={profilePicture} id="profile-pic" name='profile-pic' accept="image/*" />
                
                <button className='rounded-lg bg-purple-500 text-white py-1 px-3 mt-3'>Add a new Candidate</button>
                {error && <div>{error}</div>}
            </form>
        </div>
    </div> : null}</>
  )
}

export default CandidatesModal