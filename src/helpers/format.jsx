import { kebabCase } from 'lodash'

export const displayYear = ({ year, season }) =>
  season === 'autumn'
    ? `${year}/${(year % 100) + 1}`
    : `${year - 1}/${year % 100}`

export const coursePageUrl = (code, title, hash) =>
  `/courses/${code}/${kebabCase(title)}${hash ? `#${hash}` : ''}`

export const MinorDepartmentPageUrl = (slug,id) =>
  `/minors/${slug}/${id}`

export const HonorsDepartmentPageUrl = (slug,id) =>
  `/honors/${slug}/${id}`