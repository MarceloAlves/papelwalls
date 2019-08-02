import React from 'react'

import { COLORS } from '../styles/constants'

const SectionHeader = ({ title, description }) => (
  <>
    <h3>{title}</h3>
    <p style={{ color: COLORS.mediumGray }}>{description}</p>
  </>
)

export default SectionHeader
