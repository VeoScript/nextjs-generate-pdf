// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json([
    {
      name: 'Jerome Villaruel',
      age: '23',
      address: 'Philippines'
    },
    {
      name: 'Richlyn Hermosilla',
      age: '18',
      address: 'Philippines'
    },
    {
      name: 'Lisa Manoban',
      age: '23',
      address: 'South Korea'
    },
    {
      name: 'Jennie Kim',
      age: '24',
      address: 'South Korea'
    },
    {
      name: 'Roseanne Park',
      age: '23',
      address: 'South Korea'
    },
    {
      name: 'Kim Jisoo',
      age: '25',
      address: 'South Korea'
    }
  ])
}
