import React from 'react'
import { RandomUserProfile } from '../services/RandomUserService'
import './Profile.css'

type Props = {
  profile: RandomUserProfile
}

export default function Profile({ profile }: Props) {
  return (
    <div className="profile">
      <img src={profile.picture.large} alt="" />
      <div className="profile__name">
        {profile.name.title} {profile.name.first} {profile.name.first}
      </div>
      <div>{profile.email}</div>
      <div>{profile.phone}</div>
    </div>
  )
}
