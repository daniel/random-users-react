import React, { useEffect, useState } from 'react'
import RandomUserService, {
  RandomUserProfile,
} from '../services/RandomUserService'
import Profile from './Profile'
import './ProfilesList.css'

export default function ProfilesList() {
  const [profiles, setProfiles] = useState<RandomUserProfile[]>([])

  async function getProfiles() {
    setProfiles(await RandomUserService.get(1))
  }

  useEffect(() => {
    getProfiles()
  }, [])

  return (
    <div>
      <h1>Secret Profiles</h1>
      <div className="profiles-list">
        {profiles.map(profile => (
          <Profile key={profile.email} profile={profile} />
        ))}
      </div>
    </div>
  )
}
