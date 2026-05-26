import general

general.ui.box(
  "Welcome to Loopily"
)

general.log.info(
  "System started"
)

general.log.warn(
  "Low memory"
)

general.log.error(
  "Fake error test"
)

general.table.print([
  "Apple",
  "Banana",
  "Milk"
])

out(
  general.format.currency(
    99.99,
    "$"
  )
)

out(
  general.date.format()
)

out(
  general.validate.isEmail(
    "test@mail.com"
  )
)
