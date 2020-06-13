import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box, Table, TableBody, TableHeader, TableCell, TableRow, Heading } from "grommet"

const ScheduleEntry = ({ data }) => {
    const instructors = data.schedule.map((s) => s.instructors);
    const headerValues = ["Type", "Time", "Days", "Where", "Date Range", "Schedule Type"];
    return (
        <Box border="small" margin={{ vertical: "xsmall" }} pad="small">
            <Box direction="row-responsive" justify="between">
                <Box>
                    <Heading level={4}>{data.sectionCode} - {data.CRN}</Heading>
                    <p style={{ margin: 0 }}>{data.instructionalMethod}</p>
                </Box>
                <Box>
                    <Heading level={5}>Requirements</Heading>
                    {data.requirements.map((r) => <p style={{ margin: 0 }}>{r}</p>)}
                </Box>
            </Box>
            <Heading level={5}>Scheduled Meeting Times</Heading>
            <Table>
                <TableHeader>
                    <TableRow>
                        {headerValues.map(value => <TableCell>{value}</TableCell>)}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.schedule.map((s) =>
                        <TableRow>
                            <TableCell scope="row">
                                {s.type}
                            </TableCell>
                            <TableCell scope="row">
                                {s.time}
                            </TableCell>
                            <TableCell scope="row">
                                {s.days}
                            </TableCell>
                            <TableCell scope="row">
                                {s.where}
                            </TableCell>
                            <TableCell scope="row">
                                {s.dateRange}
                            </TableCell>
                            <TableCell scope="row">
                                {s.scheduleType}
                            </TableCell>
                        </TableRow>
                    )}

                </TableBody>
            </Table>
            <Box direction="row-responsive" justify="start">
                <Box>
                    <Heading level={5}>Registration Status</Heading>
                    <Table fill>
                        <TableHeader>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>Actual</TableCell>
                                <TableCell>Remaining</TableCell>
                                <TableCell>Capacity</TableCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    Seats
                        </TableCell>
                                <TableCell scope="row">
                                    {data.seats.actual}
                                </TableCell>
                                <TableCell scope="row">
                                    {data.seats.remaining}
                                </TableCell>
                                <TableCell scope="row">
                                    {data.seats.capacity}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    Waitlist
                        </TableCell>
                                <TableCell scope="row">
                                    {data.waitlistSeats.actual}
                                </TableCell>
                                <TableCell scope="row">
                                    {data.waitlistSeats.remaining}
                                </TableCell>
                                <TableCell scope="row">
                                    {data.waitlistSeats.capacity}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
                <Box>
                    <Heading level={5}>Instructors</Heading>
                    {instructors.map((value, index) => <p>{value}</p>)}
                </Box>
            </Box>

            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </Box>
    )
}
export default ScheduleEntry
