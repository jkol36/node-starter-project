async function f () {
	return 'async function works'
}


const testPromise = () => {
	return new Promise((resolve, reject) => {
		resolve('promises running')
	})
}

f()
.then(console.log)

testPromise()
.then(console.log)
