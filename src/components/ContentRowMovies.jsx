import React from 'react'
import PropTypes from 'prop-types'
export default function contentRowMovies(props) {



  return (
	
    <div className="row">
		
		{props.info.map((element, i)=> 
			<div key={element.titulo} className="col-md-4 mb-4">
				<div className={`"card border-left-${element.color} shadow h-100 py-2"`}>
					<div className="card-body">
						<div className="row no-gutters align-items-center">
							<div className="col mr-2">
								<div className={`"text-xs font-weight-bold text-${element.color} text-uppercase mb-1"`}>{element.titulo}</div>
								<div className="h5 mb-0 font-weight-bold text-gray-800">{element.cifra}</div>
							</div>
							<div className="col-auto">
								<i className={element.icono}></i>
							</div>
						</div>
					</div>
				</div>
			</div> 
		)}

    </div>
  )
}


contentRowMovies.propTypes = {
	info : PropTypes.array,
	customProp: function (info) {
		for (let i =0; i <info.info.length; i++){
			if(typeof info.info[i].color !== "string" ||typeof info.info[i].cifra !== "number" ||typeof info.info[i].titulo !== "string" ||typeof info.info[i].icono !== "string"){
				return new Error("error en el color, cifra, titulo o icono")
			}
		}
	}
}

contentRowMovies.defaultProps = {
	info: [{titulo:"sin titulo",color:"null",cifra:0,icono:"null"}]
}