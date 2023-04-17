import React from "react";

import styled from "styled-components";



const Attendance = () => {
 
  return (
    <div>
      <Container>
        <Wrapper>
          <Table>
            <table>
              <tr>
                <th>Employee</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
              <th>11</th>
              <th>12</th>
              <th>13</th>
              <th>14</th>
              <th>15</th>
              <th>16</th>
              <th>17</th>
              <th>18</th>
              <th>19</th>
              <th>20</th>
              <th>21</th>
              <th>22</th>
              <th>23</th>
              <th>24</th>
              <th>25</th>
              <th>26</th>
              <th>27</th>
              <th>28</th>
              <th>29</th>
              <th>30</th>
              <th>31</th>
              </tr>

              <tr>
                <td>
                  <Circlehold>
                    <Circle></Circle>
                    <Name>John Doe</Name>
                  </Circlehold>
                </td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td>31</td>
              </tr>
            </table>
          </Table>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Attendance;
const Name = styled.div`
  display: flex;
  margin-left: 10px;
  display: flex;
`
const Circle = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  background-color: red;
  border-radius: 50px;
`
const Circlehold = styled.div`
  display: flex;
  border-radius: 50px;
  align-items: center;
`
const Table = styled.table`
display: flex;
  width: 100%;
  flex-direction: column;
  overflow-x: scroll;
  /* background-color: red; */

  table{
    width: 100%;
    /* background-color: #f2f2f2; */
  }
  table,
  th,
  tr:nth-child(even) {
    background-color: #fff;
  }
  th,
  td {
    padding: 15px 20px;
    text-align: left;
  }
  th {
    border-top: 1px solid #e2e5e8;
    background-color: #fefefe;
    /* padding: 1rem 0.75rem; */
    /* display: table-cell; */
  }
`
const Employee = styled.div`
  width: 130px;
  display: flex;
  height: 10px;
  background-color: red;
  margin-left: 15px;
`
const First = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
`
const Top = styled.div`
  h3{
    color: #1f1f1f;
    font-size: 26px;
    font-weight: 500;
  }
`

const Box = styled.div`
  display: flex;
  border-top: 1px solid #E2E5E8;
  width: 100%;
`
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
  padding-top: 90px;
  padding-left: 30px;
  padding-right: 30px;
`;

const Container = styled.div`
  width: calc(100vw - 220px);
  background-color: #F5F7FA;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
