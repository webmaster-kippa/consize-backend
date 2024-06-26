import { Request, Response } from "express"
import { catchAsync } from "../utils"
import { cohortService } from "."
import httpStatus from "http-status"


export const createCohort = catchAsync(async (req: Request, res: Response) => {
    const cohort = await cohortService.createCohort(req.body)
    res.status(httpStatus.CREATED).send({ message: "Cohort created", data: cohort })
})

export const deleteCohort = catchAsync(async (req: Request, res: Response) => {
    const { cohortId } = req.params
    if (cohortId) {
        await cohortService.deleteCohort(cohortId)
    }
    res.status(httpStatus.CREATED).send({ message: "Cohort deleted" })
})



export const getCohorts = catchAsync(async (req: Request, res: Response) => {

    const { course } = req.params

    if (course) {
        const cohorts = await cohortService.fetchCohorts(course)
        res.status(httpStatus.OK).send({ data: cohorts })
    } else {
        res.status(404).send({ message: "Course not found" })
    }

})