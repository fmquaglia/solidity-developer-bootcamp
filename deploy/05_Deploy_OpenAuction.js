module.exports = async ({
                          getNamedAccounts,
                          deployments
                        }) => {

  const {deploy, log} = deployments
  const {deployer} = await getNamedAccounts()
  // const SimpleAuction = await deployments.get('SimpleAuction')

  // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
  // Default one below is ETH/USD contract on Kovan
  log("----------------------------------------------------")
  const twoDaysFromNow = Date.now()+2*60*60*24;
  const SimpleAuction = await deploy('SimpleAuction', {
    from: deployer,
    args: [twoDaysFromNow, deployer],
    log: true
  })
  log("Deployed to " + SimpleAuction.address)


  log("----------------------------------------------------")

}

module.exports.tags = ['all', 'feed', 'main']
