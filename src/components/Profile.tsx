import React from 'react'
import { RandomUserProfile } from '../services/RandomUserService'
import './Profile.css'

type Props = {
  profile: RandomUserProfile
}

export default function Profile({ profile }: Props) {
  return (
    <div className="profile">
      <img
        className="profile__image"
        src={profile.picture.large}
        width="128"
        height="128"
        alt=""
      />
      <div className="profile__name">
        {profile.name.first} {profile.name.first}
      </div>
      <a href="mailto:{profile.email}">{profile.email}</a>
      <div>{profile.phone}</div>
    </div>
  )
}
