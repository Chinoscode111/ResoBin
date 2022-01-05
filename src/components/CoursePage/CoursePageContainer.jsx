import { Empty } from 'antd'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'

import { CourseResourceContainer } from 'components/CourseResource'
import { CourseReviewContainer } from 'components/CourseReview'
import { Aside, PageSubtitle, Tabs } from 'components/shared'

import CoursePageBody from './CoursePageBody'
import CoursePageBreadcrumbs from './CoursePageBreadcrumbs'

const CoursePageContainer = ({ courseData }) => {
  const { hash } = useLocation()
  const title = `${courseData.code}: ${courseData.title}`

  return (
    <>
      <CoursePageBreadcrumbs courseTitle={title} />

      <CoursePageBody courseData={courseData} />

      <Container>
        <Tabs
          tabheight="2.25rem"
          tabwidth="7.5rem"
          animated
          defaultActiveKey={hash.split('#')[1]}
        >
          <Tabs.TabPane
            key="reviews"
            tab={
              courseData.reviews?.length
                ? `Reviews (${courseData.reviews.length})`
                : `Reviews`
            }
          >
            <CourseReviewContainer />
          </Tabs.TabPane>

          <Tabs.TabPane
            key="resources"
            tab={
              courseData.resources?.length
                ? `Resources (${courseData.resources.length})`
                : `Resources`
            }
          >
            <CourseResourceContainer />
          </Tabs.TabPane>
        </Tabs>
      </Container>

      <Aside title="Course stats">
        <Empty description={<PageSubtitle>Coming soon!</PageSubtitle>} />
      </Aside>
    </>
  )
}

export default CoursePageContainer

const Container = styled.div`
  margin-bottom: 1rem;
  padding: 1.5rem 1rem;
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
`
