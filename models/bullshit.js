import mongoose from 'mongoose'



const bullshitSchema = mongoose.Schema({
	name: String,
	profession: String,
	age: Number
})


export default mongoose.model('bullshit', bullshitSchema)