# button 
The `<v-button>` uses standard the HTML button element API. Can be altered with diffrent themes and sizes. 

## props 
- `block` ***Boolean*** (*optional*) `default: false` 
Makes button full width 

- `loading` ***Boolean*** (*optional*) `default: false` 
Conditional set button in loading state 

- `contrast` ***Boolean*** (*optional*) `default: false` 
Makes button contrast on dark background 

- `primary` ***Boolean*** (*optional*) `default: false` 
Makes button a primary by setting color/background depending on theme 

- `squared` ***Boolean*** (*optional*) `default: false` 
Removes border-radius 

- `rounded` ***Boolean*** (*optional*) `default: false` 
Make rounded borders 

- `disabled` ***Boolean*** (*optional*) `default: false` 
Conditional set button in disabled state 

- `icon` ***Boolean*** (*optional*) `default: false` 
Removes all padding 

- `size` ***String*** (*optional*) `default: 'medium'` 
Set size of button ['xsmall', 'small', 'medium', 'large', 'xlarge'] 

- `type` ***String*** (*optional*) `default: 'button'` 
Set the type of the button ['submit', 'button', 'reset'] 

- `theme` ***String*** (*optional*) `default: 'flat'` 
Set the theme of the button ['raised', 'flat', 'outlined', 'alert'] 

- `v-model` ***String*** (*optional*) `default: ''` 
Set the label (default slot will overwrite this string) 


## events 
- `click` Fired on click or when focused on Key press Enter/Space 


