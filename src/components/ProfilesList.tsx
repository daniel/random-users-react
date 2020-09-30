import React, { useEffect, useState } from 'react'
import RandomUserService, {
  RandomUserProfile,
} from '../services/RandomUserService'
import GenderFilter from './GenderFilter'
import Profile from './Profile'
import './ProfilesList.css'

export default function ProfilesList() {
  const [profiles, setProfiles] = useState<RandomUserProfile[]>([])
  const [page, setPage] = useState<number>(1)
  const [gender, setGender] = useState('male')

  useEffect(() => {
    getFirstPage()
  }, [])

  async function getFirstPage() {
    setProfiles(await RandomUserService.get(1))
  }

  const loadMore = async () => {
    const moreProfiles = await RandomUserService.get(page + 1)
    setProfiles(profiles.concat(moreProfiles))
    setPage(page + 1)
  }

  const getFilteredProfiles = () => {
    return profiles.filter(profile => profile.gender === gender)
  }

  const onChangeGender = (gender: string) => {
    setGender(gender)
  }

  return (
    <div>
      <h1>Secret Profiles</h1>
      <GenderFilter value={gender} onChange={onChangeGender} />
      <div className="profiles-list">
        {getFilteredProfiles().map(profile => (
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
