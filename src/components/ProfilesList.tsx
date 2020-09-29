import React, { useEffect, useState } from 'react'
import RandomUserService, {
  RandomUserProfile,
} from '../services/RandomUserService'
import Profile from './Profile'
import './ProfilesList.css'

export default function ProfilesList() {
  const [profiles, setProfiles] = useState<RandomUserProfile[]>([])
  const [page, setPage] = useState<number>(1)

  async function getData() {
    setProfiles(await RandomUserService.get(page))
  }

  useEffect(() => {
    getData()
  }, [])

  const loadMore = async () => {
    const moreProfiles = await RandomUserService.get(page + 1)
    setProfiles(profiles.concat(moreProfiles))
    setPage(page + 1)
  }

  return (
    <div>
      <h1>Secret Profiles</h1>
      <div className="profiles-list">
        {profiles.map(profile => (
          <Profile key={profile.email} profile={profile} />
        ))}
      </div>
      {profiles.length > 0 && (
        <div className="profiles-list__load-more" onClick={loadMore}>
          Get More
        </div>
      )}
    </div>
  )
}
