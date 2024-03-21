import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // const newUser = await prisma.user.create({
  //   data: {
  //     name: "joseph4",
  //     email: "joseph4@example.com",
  //   },
  // });
  // console.log(newUser)

  // const newPost = await prisma.post.create({
  //   data: {
  //     title: 'my first publication',
  //     content: 'contenidoo o.o',
  //     author: {
  //       connect: {
  //         id: newUser.id
  //       }
  //     }
  //   }
  // })

  // const newUser = await prisma.user.create({
  //   data: {
  //     name: "kirara",
  //     email: "kirara@example.com",
  //     posts: {
  //       create: {
  //         title: 'Tutorial',
  //         content: 'new content'
  //       }
  //     }
  //   },
  // });
  // console.log(newUser)

  // const posts = await prisma.post.findMany()
  // console.log(posts);

  //console.log(newPost);

  // const user = await prisma.user.updateMany({
  //   where: {
  //     name: 'joseph'
  //   },
  //   data: {
  //     lastname: "jotaro"
  //   }
  // })

  // const user = await prisma.user.upsert({
  //   where: {
  //     id: 10
  //   },
  //   create: {
  //     name: 'joseph3',
  //     email: 'joseph3@example.com'
  //   },
  //   update: {
  //     lastname: 'dio'
  //   }
  // })
  //const user = await prisma.user.findMany()
  //console.log(user)

  const users = await prisma.user.findMany({
    include: {
      posts: true,
    }
  })
  console.log(users);
}

main()