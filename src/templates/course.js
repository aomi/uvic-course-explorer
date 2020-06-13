import React from "react"
import Layout from "../components/layout"
import ScheduleEntry from "../components/schedule"
import { Grid, Box, Heading, Menu } from "grommet"

export default function CourseEntry({ data }) {
    const course = data.coursesJson
    const lookup = {
        "09": "Fall",
        "01": "Winter",
        "05": "Summer"
    }
    return (
        <Layout>
            <Box direction="row-responsive" justify="between">
                <Box>
                    <Heading level={1} margin="none">{course.catalogCourseId}</Heading>
                    <Heading level={3} margin="none">{course.title}</Heading>
                </Box>
                <Box>
                    <Heading level={2} margin="none">{course.hoursCatalogText}</Heading>
                </Box>
            </Box>
            <p dangerouslySetInnerHTML={{ __html: course.description }} />
            <Box direction="row-responsive" justify="start">
                {course.preAndCorequisites && <Box>
                    <Heading level={3} margin="none">Pre-requisites</Heading>
                    <div dangerouslySetInnerHTML={{ __html: course.preAndCorequisites }} />
                </Box>}
                {course.preOrCorequisites && <Box>
                    <Heading level={3} margin="none">Co-requisites</Heading>
                    <div dangerouslySetInnerHTML={{ __html: course.preOrCorequisites }} />
                </Box>}
            </Box>
            {course.offerings && <div>
                <Box direction="row-responsive" justify="between" align="center">
                    <Heading level={3} margin="none">Schedules</Heading>
                    <Menu
                        label="Term"
                        items={[
                            { label: 'Summer 2020', onClick: () => { } },
                            { label: 'Fall 2020', onClick: () => { } },
                            { label: 'Winter 2021', onClick: () => { } },
                        ]}
                    />
                </Box>

                {course.offerings.map((offer) =>
                    <Box>
                        <h3 id={offer.term}>{lookup[offer.term.slice(4, 6)]} {offer.term.slice(0, 4)}</h3>
                        {offer.sections.map((section) =>
                            <ScheduleEntry data={section}></ScheduleEntry>
                        )}
                    </Box>
                )}
            </div>}
            {course.supplementalNotes && <div>
                <h2>Note(s)</h2>
                <div dangerouslySetInnerHTML={{ __html: course.supplementalNotes }} />
            </div>}
            <h2>Comments</h2>
        </Layout>
    )
}
export const query = graphql`
    query($catalogCourseId: String!){
        coursesJson(catalogCourseId: {eq: $catalogCourseId}){
            title
            description
            catalogCourseId
            hoursCatalogText
            supplementalNotes
            preAndCorequisites
            preOrCorequisites
            offerings {
                term
                sections {
                    schedule {
              days
              instructors
              scheduleType
              time
              type
              where
              dateRange
            }
            requirements
            seats {
              actual
              capacity
              remaining
            }
            levels
            instructionalMethod
            CRN
            additionalInfo
            sectionCode
            sectionType
            waitlistSeats {
              remaining
              capacity
              actual
            }
                }
        }
        }
    }
`