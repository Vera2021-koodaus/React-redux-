import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {

	addPerson = ()=>{
		const name = this.nameNode.value
		const age = this.ageNode.value*1
		const personObj = {id:nanoid(),name,age}
		this.props.jiaYiRen(personObj)
		this.nameNode.value = ''
		this.ageNode.value = ''
	}

	render() {
		return (
			<div>
				<h2>Here is the Participant Component,the Sum of the upper Component {this.props.he>1? 'are':'is'}:{this.props.he}</h2>
				<input ref={c=>this.nameNode = c} type="text" placeholder="entry user name"/>
				<input ref={c=>this.ageNode = c} type="text" placeholder="entry user age"/>
				<button onClick={this.addPerson}>Add</button>
				<ul>
					{
						this.props.yiduiren.map((p)=>{
							return <li key={p.id}>{p.name}--{p.age}</li>
						})
					}
				</ul>
			</div>
		)
	}
}

export default connect(
	state => ({yiduiren:state.rens,he:state.he}),//映射状态
	{jiaYiRen:createAddPersonAction}//映射操作状态的方法
)(Person)
