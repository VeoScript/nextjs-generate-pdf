import jsPDF from 'jspdf'
import 'jspdf-autotable'

export default function GeneratePDF({ person }) {

  function generate() {
    const doc = new jsPDF()

    doc.autoTable({
      head: [['Name', 'Age', 'Address']],
      body: 
        person.map(({ name, age, address }) => {
          return [
            name,
            age,
            address
          ]
        }),
    })

    doc.save('persons.pdf')
  }

  return (
    <div>
      <button onClick={generate} type="primary">Download PDF</button> 
    </div>
  )
}