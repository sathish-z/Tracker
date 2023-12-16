
import './App.css';
import {Header} from './component/header';
import {Balance} from './component/balance'
import { IncomeExpenses } from './component/IncomeExpenses';
import { TransactionList } from './component/TransactionList';
import { AddTransaction } from './component/AddTransaction';
import { GlobalProvider } from './context/GobalState';


function App() {

return(
  <GlobalProvider>
    <div className="container">
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
    </div>
  </GlobalProvider>
    

)
}

export default App;
