"use server";

import { prisma } from "@/lib/prisma";

// For getting a User by ID and displaying thier name and email
export async function getUserById(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { firstName: true, email: true },
    });
    if (!user) {
      return { success: false, error: "User not found" };
    }
    return { success: true, data: user };
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return { success: false, error: "Failed to fetch user" };
  }
}

// Getting the currentUser from the data base
export async function getCurrentUser() {
  try {
    const user = await prisma.user.findFirst({
      orderBy: { createdAt: "desc" },
      select: { firstName: true, email: true },
    });
    if (!user) {
      return { success: false, error: "User not found" };
    }
    return { success: true, data: user };
  } catch (error) {
    console.error("Failed to fetch current user:", error);
    return { success: false, error: "Failed to fetch current user" };
  }
}

// import { prisma } from '@/lib/prisma'
// import { revalidatePath } from 'next/cache'

// // Alumni Actions
// export async function getAllAlumni() {
//   try {
//     const alumni = await prisma.alumni.findMany({
//       orderBy: { createdAt: 'desc' },
//     })
//     return { success: true, data: alumni }
//   } catch (error) {
//     console.error('Failed to fetch alumni:', error)
//     return { success: false, error: 'Failed to fetch alumni' }
//   }
// }

// export async function createAlumni(data: any) {
//   try {
//     const alumni = await prisma.alumni.create({ data })
//     revalidatePath('/admin/alumni')
//     revalidatePath('/alumni')
//     return { success: true, data: alumni }
//   } catch (error) {
//     console.error('Failed to create alumni:', error)
//     return { success: false, error: 'Failed to create alumni' }
//   }
// }

// export async function updateAlumni(id: string, data: any) {
//   try {
//     const alumni = await prisma.alumni.update({
//       where: { id },
//       data,
//     })
//     revalidatePath('/admin/alumni')
//     revalidatePath('/alumni')
//     return { success: true, data: alumni }
//   } catch (error) {
//     console.error('Failed to update alumni:', error)
//     return { success: false, error: 'Failed to update alumni' }
//   }
// }

// export async function deleteAlumni(id: string) {
//   try {
//     await prisma.alumni.delete({ where: { id } })
//     revalidatePath('/admin/alumni')
//     revalidatePath('/alumni')
//     return { success: true }
//   } catch (error) {
//     console.error('Failed to delete alumni:', error)
//     return { success: false, error: 'Failed to delete alumni' }
//   }
// }

// // Blog Actions
// export async function getAllBlogPosts() {
//   try {
//     const posts = await prisma.blog.findMany({
//       orderBy: { createdAt: 'desc' },
//     })
//     return { success: true, data: posts }
//   } catch (error) {
//     console.error('Failed to fetch blog posts:', error)
//     return { success: false, error: 'Failed to fetch blog posts' }
//   }
// }

// export async function getBlogPostById(id: string) {
//   try {
//     const post = await prisma.blog.findUnique({
//       where: { id },
//     })
//     if (!post) {
//       return { success: false, error: 'Blog post not found' }
//     }
//     return { success: true, data: post }
//   } catch (error) {
//     console.error('Failed to fetch blog post:', error)
//     return { success: false, error: 'Failed to fetch blog post' }
//   }
// }

// export async function createBlogPost(data: any) {
//   try {
//     const post = await prisma.blog.create({ data })
//     revalidatePath('/admin/blog')
//     revalidatePath('/blog')
//     return { success: true, data: post }
//   } catch (error) {
//     console.error('Failed to create blog post:', error)
//     return { success: false, error: 'Failed to create blog post' }
//   }
// }

// export async function updateBlogPost(id: string, data: any) {
//   try {
//     const post = await prisma.blog.update({
//       where: { id },
//       data,
//     })
//     revalidatePath('/admin/blog')
//     revalidatePath('/blog')
//     return { success: true, data: post }
//   } catch (error) {
//     console.error('Failed to update blog post:', error)
//     return { success: false, error: 'Failed to update blog post' }
//   }
// }

// export async function deleteBlogPost(id: string) {
//   try {
//     await prisma.blog.delete({ where: { id } })
//     revalidatePath('/admin/blog')
//     revalidatePath('/blog')
//     return { success: true }
//   } catch (error) {
//     console.error('Failed to delete blog post:', error)
//     return { success: false, error: 'Failed to delete blog post' }
//   }
// }

// // Gallery Actions
// export async function getAllGalleryImages() {
//   try {
//     const images = await prisma.gallery.findMany({
//       orderBy: { createdAt: 'desc' },
//     })
//     return { success: true, data: images }
//   } catch (error) {
//     console.error('Failed to fetch gallery images:', error)
//     return { success: false, error: 'Failed to fetch gallery images' }
//   }
// }

// export async function createGalleryImage(data: any) {
//   try {
//     const image = await prisma.gallery.create({ data })
//     revalidatePath('/admin/gallery')
//     revalidatePath('/gallery')
//     return { success: true, data: image }
//   } catch (error) {
//     console.error('Failed to create gallery image:', error)
//     return { success: false, error: 'Failed to create gallery image' }
//   }
// }

// export async function updateGalleryImage(id: string, data: any) {
//   try {
//     const image = await prisma.gallery.update({
//       where: { id },
//       data,
//     })
//     revalidatePath('/admin/gallery')
//     revalidatePath('/gallery')
//     return { success: true, data: image }
//   } catch (error) {
//     console.error('Failed to update gallery image:', error)
//     return { success: false, error: 'Failed to update gallery image' }
//   }
// }

// export async function deleteGalleryImage(id: string) {
//   try {
//     await prisma.gallery.delete({ where: { id } })
//     revalidatePath('/admin/gallery')
//     revalidatePath('/gallery')
//     return { success: true }
//   } catch (error) {
//     console.error('Failed to delete gallery image:', error)
//     return { success: false, error: 'Failed to delete gallery image' }
//   }
// }

// // Review Actions
// export async function getAllReviews() {
//   try {
//     const reviews = await prisma.review.findMany({
//       orderBy: { createdAt: 'desc' },
//     })
//     return { success: true, data: reviews }
//   } catch (error) {
//     console.error('Failed to fetch reviews:', error)
//     return { success: false, error: 'Failed to fetch reviews' }
//   }
// }

// export async function createReview(data: any) {
//   try {
//     const review = await prisma.review.create({ data })
//     revalidatePath('/admin/reviews')
//     revalidatePath('/reviews')
//     return { success: true, data: review }
//   } catch (error) {
//     console.error('Failed to create review:', error)
//     return { success: false, error: 'Failed to create review' }
//   }
// }

// export async function updateReview(id: string, data: any) {
//   try {
//     const review = await prisma.review.update({
//       where: { id },
//       data,
//     })
//     revalidatePath('/admin/reviews')
//     revalidatePath('/reviews')
//     return { success: true, data: review }
//   } catch (error) {
//     console.error('Failed to update review:', error)
//     return { success: false, error: 'Failed to update review' }
//   }
// }

// export async function deleteReview(id: string) {
//   try {
//     await prisma.review.delete({ where: { id } })
//     revalidatePath('/admin/reviews')
//     revalidatePath('/reviews')
//     return { success: true }
//   } catch (error) {
//     console.error('Failed to delete review:', error)
//     return { success: false, error: 'Failed to delete review' }
//   }
// }

// // Course Actions
// export async function getAllCourses() {
//   try {
//     const courses = await prisma.course.findMany({
//       orderBy: { createdAt: 'desc' },
//     })
//     return { success: true, data: courses }
//   } catch (error) {
//     console.error('Failed to fetch courses:', error)
//     return { success: false, error: 'Failed to fetch courses' }
//   }
// }

// export async function getCourseById(id: string) {
//   try {
//     const course = await prisma.course.findUnique({
//       where: { id },
//     })
//     if (!course) {
//       return { success: false, error: 'Course not found' }
//     }
//     return { success: true, data: course }
//   } catch (error) {
//     console.error('Failed to fetch course:', error)
//     return { success: false, error: 'Failed to fetch course' }
//   }
// }

// export async function createCourse(data: any) {
//   try {
//     const course = await prisma.course.create({ data })
//     revalidatePath('/admin/courses')
//     revalidatePath('/courses')
//     return { success: true, data: course }
//   } catch (error) {
//     console.error('Failed to create course:', error)
//     return { success: false, error: 'Failed to create course' }
//   }
// }

// export async function updateCourse(id: string, data: any) {
//   try {
//     const course = await prisma.course.update({
//       where: { id },
//       data,
//     })
//     revalidatePath('/admin/courses')
//     revalidatePath('/courses')
//     return { success: true, data: course }
//   } catch (error) {
//     console.error('Failed to update course:', error)
//     return { success: false, error: 'Failed to update course' }
//   }
// }

// export async function deleteCourse(id: string) {
//   try {
//     await prisma.course.delete({ where: { id } })
//     revalidatePath('/admin/courses')
//     revalidatePath('/courses')
//     return { success: true }
//   } catch (error) {
//     console.error('Failed to delete course:', error)
//     return { success: false, error: 'Failed to delete course' }
//   }
// }

// // Contact Actions
// export async function getAllContacts() {
//   try {
//     const contacts = await prisma.contact.findMany({
//       orderBy: { createdAt: 'desc' },
//     })
//     return { success: true, data: contacts }
//   } catch (error) {
//     console.error('Failed to fetch contacts:', error)
//     return { success: false, error: 'Failed to fetch contacts' }
//   }
// }

// export async function markContactAsRead(id: string) {
//   try {
//     const contact = await prisma.contact.update({
//       where: { id },
//       data: { isRead: true },
//     })
//     revalidatePath('/admin/contact')
//     return { success: true, data: contact }
//   } catch (error) {
//     console.error('Failed to mark contact as read:', error)
//     return { success: false, error: 'Failed to mark contact as read' }
//   }
// }

// export async function deleteContact(id: string) {
//   try {
//     await prisma.contact.delete({ where: { id } })
//     revalidatePath('/admin/contact')
//     return { success: true }
//   } catch (error) {
//     console.error('Failed to delete contact:', error)
//     return { success: false, error: 'Failed to delete contact' }
//   }
// }

// 'use server'

// import { prisma } from '@/lib/prisma'
// import bcrypt from 'bcrypt'

// export async function authenticateAdmin(email: string, password: string) {
//   try {
//     // Try database authentication
//     const admin = await prisma.admin.findUnique({
//       where: { email },
//     })

//     if (!admin) {
//       return { success: false, error: 'Invalid credentials' }
//     }

//     // Compare hashed password
//     const passwordMatch = await bcrypt.compare(password, admin.password)

//     if (!passwordMatch) {
//       return { success: false, error: 'Invalid credentials' }
//     }

//     return {
//       success: true,
//       data: {
//         token: 'admin-token',
//         admin: { id: admin.id, email: admin.email, name: admin.name }
//       }
//     }
//   } catch (error) {
//     console.error('Failed to login:', error)
//     return { success: false, error: 'Failed to login' }
//   }
// }
