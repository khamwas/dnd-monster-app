{
    _id: '5a52bc6f559f00418e5331b7',
    index: 5,
    name: 'Adult Blue Dragon',
    size: 'Huge',
    type: 'dragon',
    subtype: '',
    alignment: 'lawful evil',
    armor_class: 19,
    hit_points: 225,
    hit_dice: '18d12',
    speed: '40 ft., burrow 30 ft., fly 80 ft.',
    strength: 25,
    dexterity: 10,
    constitution: 23,
    intelligence: 16,
    wisdom: 15,
    charisma: 19,
    dexterity_save: 5,
    constitution_save: 11,
    wisdom_save: 7,
    charisma_save: 9,
    perception: 12,
    stealth: 5,
    damage_vulnerabilities: '',
    damage_resistances: '',
    damage_immunities: 'lightning',
    condition_immunities: '',
    senses: 'blindsight 60 ft., darkvision 120 ft., passive Perception 22',
    languages: 'Common, Draconic',
    challenge_rating: 16,
    special_abilities: [
      {
        attack_bonus: 0,
        desc: 'If the dragon fails a saving throw, it can choose to succeed instead.',
        name: 'Legendary Resistance (3/Day)'
      }
    ],
    actions: [
      {
        attack_bonus: 0,
        desc: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.',
        name: 'Multiattack'
      },
      {
        damage_bonus: 7,
        damage_dice: '2d10 + 1d10',
        attack_bonus: 12,
        desc: 'Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage.',
        name: 'Bite'
      },
      {
        damage_bonus: 7,
        damage_dice: '2d6',
        attack_bonus: 12,
        desc: 'Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage.',
        name: 'Claw'
      },
      {
        damage_bonus: 7,
        damage_dice: '2d8',
        attack_bonus: 12,
        desc: 'Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage.',
        name: 'Tail'
      },
      {
        attack_bonus: 0,
        desc: 'Each creature of the dragon\'s choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours.',
        name: 'Frightful Presence'
      },
      {
        damage_dice: '12d10',
        attack_bonus: 0,
        desc: 'The dragon exhales lightning in a 90-foot line that is 5 ft. wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.',
        name: 'Lightning Breath (Recharge 5-6)'
      }
    ],
    legendary_actions: [
      {
        attack_bonus: 0,
        desc: 'The dragon makes a Wisdom (Perception) check.',
        name: 'Detect'
      },
      {
        attack_bonus: 0,
        desc: 'The dragon makes a tail attack.',
        name: 'Tail Attack'
      },
      {
        attack_bonus: 0,
        desc: 'The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.',
        name: 'Wing Attack (Costs 2 Actions)'
      }
    ],
    url: 'http://www.dnd5eapi.co/api/monsters/5'
  }