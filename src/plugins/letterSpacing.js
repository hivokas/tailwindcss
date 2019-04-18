import _ from 'lodash'

export default function() {
  return function({ addUtilities, config, variants, e }) {
    const utilities = _.fromPairs(
      _.map(config('theme.letterSpacing'), (value, modifier) => {
        return [
          `.${e(`tracking-${modifier}`)}`,
          {
            'letter-spacing': value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('letterSpacing'))
  }
}