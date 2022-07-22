import React from 'react'

function DishCard({data,first,second,third,handleRank1,handleRank2,handleRank3}) {
  return (
    <div className="d-flex flex-wrap offset-sm-2  col-sm-8">
        {data.length > 0
          ? data.map((item) => (
              <div
                key={item.id}
                className="card col-md-3 mb-5 me-3 shadow "
                style={{ width: "300px" }}
              >
                <div className="h-100">
                  <div className="card h-100 text-center p-4">
                    <img
                      src={item.image}
                      alt="dish-pic"
                      className="card-img-top img-fluid mb-2"
                    />
                    <h2>{item.dishName}</h2>
                    <p>{item.description}</p>
                    <div>
                      <button
                        className="btn-outline-dark me-3 "
                        style={{
                          background: item.id === first ? "orange" : "white",
                        }}
                        onClick={() => handleRank1(item.id)}
                      >
                        1
                      </button>
                      <button
                        className="btn-outline-dark me-3"
                        style={{
                          background: item.id === second ? "orange" : "white",
                        }}
                        onClick={() => handleRank2(item.id)}
                      >
                        2
                      </button>
                      <button
                        className="btn-outline-dark me-3"
                        style={{
                          background: item.id === third ? "orange" : "white",
                        }}
                        onClick={() => handleRank3(item.id)}
                      >
                        3
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
  )
}

export default DishCard