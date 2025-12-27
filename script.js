//your JS code here. If required.
const input = document.getElementById("ip")
const output = document.getElementById("output")
const promise1 = ()=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			output.textContent=`Result: ${input.value}`
		    resolve(input.value)
		},2000)
	})
}
const promise2 = (data)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			output.textContent=`Result: ${2*data}`
		    resolve(2*data)
		},1000)
	})
}
const promise3 = (data)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			output.textContent=`Result: ${data-3}`
			resolve(data-3)
		},1000)
	})
}
const promise4 = (data)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			output.textContent=`Result: ${data/2}`
			resolve(data/2)
		},1000)
	})
}
const promise5 = (data)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			output.textContent=`Result: ${data+10}`
					resolve(data+10)   
					   },1000)
	})
}
async function start(){
	const val1 = await promise1()
	const val2 = await promise2(val1)
	const val3 = await promise3(val2)
	const val4 = await promise4(val3)
	const val5 = await promise5(val4)
}
document.getElementById("btn").addEventListener("click",start)