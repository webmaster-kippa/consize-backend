import Joi from 'joi'
import { CreateCoursePayload, Media, MediaType } from './interfaces.courses'
import { CreateLessonPayload } from './interfaces.lessons'
import { CreateBlockPayload } from './interfaces.blocks'

const createCourseRequest: Record<keyof CreateCoursePayload, any> = {
  free: Joi.boolean(),
  bundle: Joi.boolean(),
  private: Joi.boolean(),
  headerMedia: Joi.object<Media>().keys({
    awsFileKey: Joi.string().optional(),
    mediaType: Joi.string().valid(...Object.values(MediaType)),
    url: Joi.string().required()
  }),
  title: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().optional(),
  audiences: Joi.string().optional(),
  currentCohort: Joi.string().optional()
}

export const createCourse = {
  body: Joi.object().keys(createCourseRequest),
}
export const updateCourse = {
  body: Joi.object<Partial<CreateCoursePayload>>().keys({
    free: Joi.boolean(),
    bundle: Joi.boolean(),
    private: Joi.boolean(),
    headerMedia: Joi.object<Media>().keys({
      awsFileKey: Joi.string().required(),
      mediaType: Joi.string().valid(...Object.values(MediaType)),
      url: Joi.string().required()
    }),
    title: Joi.string(),
    description: Joi.string(),
    price: Joi.number().optional(),
    audiences: Joi.string().optional(),
  }),
  params: Joi.object().keys({
    course: Joi.string().required()
  })
}

export const createLesson = {
  body: Joi.object<CreateLessonPayload>().keys({
    title: Joi.string().required(),
    description: Joi.string().optional()
  }),
  params: Joi.object().keys({
    course: Joi.string().required()
  })
}


export const updateLesson = {
  body: Joi.object<CreateLessonPayload>().keys({
    title: Joi.string().required(),
    description: Joi.string().optional()
  }),
  params: Joi.object().keys({
    course: Joi.string().required(),
    lesson: Joi.string().required(),
  })
}




// create and update blocks

export const createBlock = {
  body: Joi.object<CreateBlockPayload>().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
    bodyMedia: Joi.object<Media>().keys({
      awsFileKey: Joi.string().required(),
      mediaType: Joi.string().valid(...Object.values(MediaType)),
      url: Joi.string().required()
    }).optional(),
    quiz: Joi.string().optional()
  }),
  params: Joi.object().keys({
    course: Joi.string().required(),
    lesson: Joi.string().required(),
  })
}


export const updateBlock = {
  body: Joi.object<CreateBlockPayload>().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
    bodyMedia: Joi.object<Media>().keys({
      awsFileKey: Joi.string().required(),
      mediaType: Joi.string().valid(...Object.values(MediaType)),
      url: Joi.string().required()
    }).optional(),
    quiz: Joi.string().optional()
  }),
  params: Joi.object().keys({
    course: Joi.string().required(),
    lesson: Joi.string().required(),
    block: Joi.string().required(),
  })
}
