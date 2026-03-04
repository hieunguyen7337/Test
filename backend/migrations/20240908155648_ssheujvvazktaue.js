'use strict';

/**
 * Migration: 20240908155648_ssheujvvazktaue
 * Description: Add index
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ixdeqygzee', function(table) {
    table.bigInteger('efzntaowxq');
    table.string('iadrigfhan');
    table.integer('njpzrnoggm');
    table.integer('lokvjefuvd');
  });
  await knex.schema.alterTable('ksiknxqovk', function(table) {
    table.bigInteger('rcaumisieo');
    table.boolean('obdsglidjv');
    table.bigInteger('hiewefnfsp');
    table.timestamp('rhwadpowpa');
    table.text('uwscyaudpg');
    table.float('zvsplmbxvk');
    table.string('cauuelamkz');
    table.string('nepwsmebgn');
  });
  await knex.schema.alterTable('xkqklgivjj', function(table) {
    table.text('egypnksgsp');
    table.string('zddcxevmls');
    table.timestamp('hkkhktcsyo');
    table.json('uizkjvvlsm');
    table.timestamp('luqujezxoy');
    table.json('eqxcqqqwvb');
    table.boolean('elgphvwdww');
  });
  await knex.schema.alterTable('kmfaicwaeu', function(table) {
    table.float('mcbmhgsyub');
    table.boolean('ikeoekfqdu');
    table.timestamp('lkpefvgqwu');
    table.timestamp('blfhhvpfdi');
    table.bigInteger('kzknzbprga');
    table.text('mufrcbuvsm');
    table.bigInteger('ujfsushvmz');
  });
  await knex.schema.alterTable('tblsmwuphv', function(table) {
    table.bigInteger('neruiaibrh');
    table.bigInteger('fwfrmoqavf');
    table.float('bwxljufpdf');
    table.float('jghttunilp');
  });
  await knex.schema.alterTable('bzhfhiqsle', function(table) {
    table.string('uaaahmeseg');
    table.string('ccbqaonybn');
    table.json('wgsztdwbbp');
  });
  await knex.schema.alterTable('wklajkxawt', function(table) {
    table.string('lqzcegsgmg');
    table.string('pxvytproxb');
    table.string('midrmofcbh');
    table.integer('hzlofpalgc');
    table.timestamp('fkjpsqztmy');
    table.timestamp('uawgacpcyn');
  });
  await knex.schema.alterTable('mpfbohqhrs', function(table) {
    table.bigInteger('iiparlvasx');
    table.timestamp('rjviurwkwq');
    table.bigInteger('haydgwchyw');
  });
  await knex.schema.alterTable('vuuoogvpyd', function(table) {
    table.text('uzwgmhcdod');
    table.bigInteger('tzfhyurwkr');
    table.bigInteger('wcdcixfhka');
    table.timestamp('fmsmoznyba');
    table.boolean('aawmymyhnm');
    table.bigInteger('qsftxeeezp');
    table.integer('ybdgejudnw');
    table.text('uughgrgugj');
  });
  await knex.schema.alterTable('mptqlwwqsj', function(table) {
    table.timestamp('knysoygypj');
    table.integer('bmhofhuwib');
    table.timestamp('vjtpwcbovc');
    table.integer('gcvreujhve');
    table.boolean('bqqmehcexg');
  });
  await knex.schema.alterTable('koxgsqgwnh', function(table) {
    table.bigInteger('ipknijckku');
    table.string('yfalyciuws');
    table.float('euwefieldz');
    table.bigInteger('kyspibjdfy');
    table.float('wfjajdlyip');
    table.string('iyznxxidqa');
  });
  await knex.schema.alterTable('ybukmofgqy', function(table) {
    table.text('koeqhgitvx');
    table.text('vgizbljxqo');
    table.string('haihzullut');
    table.string('mnzypvdflz');
  });
  await knex.schema.alterTable('hgkmwenvwo', function(table) {
    table.boolean('xtrnovbbsl');
    table.text('clkwfeamdf');
    table.float('ridmzrzamb');
  });
  await knex.schema.alterTable('vcjetqrmhn', function(table) {
    table.json('jxjwrpluhm');
    table.boolean('ulsaratvbk');
    table.text('hionfgczuo');
  });
  await knex.schema.alterTable('qkkotzfxsa', function(table) {
    table.bigInteger('eehvjfmqlq');
    table.text('oelumqigsb');
    table.timestamp('iwozesbgbh');
    table.bigInteger('tmcbtjtrvb');
    table.json('kxecgzxxqf');
    table.text('sfwfwaieix');
    table.float('ynfqdpalkl');
    table.json('ermuoazbcz');
    table.string('nspvwczvzz');
    table.bigInteger('edxinwqnlw');
  });
  await knex.schema.alterTable('qlafnumpat', function(table) {
    table.timestamp('opegsqjvjd');
    table.integer('dmwilhhlxh');
    table.boolean('psvgfzvlou');
    table.boolean('kiltoasorp');
    table.bigInteger('rrumvipmur');
  });
  await knex.schema.alterTable('sndvdmkqpt', function(table) {
    table.bigInteger('nlyvlhzcyj');
    table.string('qfaixxahkf');
    table.integer('xaosbzurbr');
    table.bigInteger('xtddichxvh');
    table.boolean('lsjixtaygv');
    table.bigInteger('ezekvlruuu');
    table.string('jtaomwexoi');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};