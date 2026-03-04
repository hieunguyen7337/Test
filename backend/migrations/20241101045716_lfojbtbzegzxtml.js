'use strict';

/**
 * Migration: 20241101045716_lfojbtbzegzxtml
 * Description: Create table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('pxsiyqgngy', function(table) {
    table.bigInteger('ijvybgnctm');
    table.text('ouypkmivti');
    table.float('rmvcqynnas');
    table.text('cqodybwkfc');
    table.json('kkbouhzomy');
    table.bigInteger('ntkmahqdyn');
  });
  await knex.schema.alterTable('iskxwcvlds', function(table) {
    table.integer('dwsyyuxmke');
    table.boolean('izyowzkotf');
    table.text('clbsuclsru');
    table.boolean('aghxnzjnux');
  });
  await knex.schema.alterTable('wixtgzsqoc', function(table) {
    table.string('hiemhkjavm');
    table.integer('czryemsbsz');
    table.integer('cicdkhizrs');
    table.text('vurxkefgym');
    table.json('jhruhfokkq');
  });
  await knex.schema.alterTable('bzertimgsz', function(table) {
    table.boolean('wxsptpknmu');
    table.boolean('tvezlqqipj');
    table.timestamp('wnvflioinr');
    table.timestamp('dycqmslauj');
    table.text('bjtbgjmqwr');
    table.timestamp('ghvpcwctoi');
  });
  await knex.schema.alterTable('zuzoqzkpme', function(table) {
    table.integer('assqhwphss');
    table.string('xowbtcwxgs');
    table.bigInteger('zffelctmbk');
    table.string('bcdwyprwjs');
    table.text('xbfrviojpg');
  });
  await knex.schema.alterTable('mpgfbfgxhu', function(table) {
    table.integer('uhkmieztgu');
    table.float('tmnfxaoawh');
    table.timestamp('mgkekkjdmk');
    table.timestamp('uazofxkard');
    table.timestamp('mbohmpnoyi');
    table.float('moawvmaxse');
    table.text('hafrrspwtd');
    table.boolean('tavqfgqnin');
    table.boolean('awmfglgfjr');
    table.string('dqirbbraao');
  });
  await knex.schema.alterTable('womcxfzsgi', function(table) {
    table.string('cgsblpppaa');
    table.float('asrdubyhwn');
    table.timestamp('bwnedhrztk');
    table.bigInteger('yrnaxptrch');
    table.bigInteger('mwxagkiqbr');
    table.float('emgqgkfzgx');
  });
  await knex.schema.alterTable('jbenitgddc', function(table) {
    table.string('jfgcfjogak');
    table.bigInteger('bukmjbnxqw');
    table.integer('gadsdkprwq');
    table.integer('fwmdaxuyyt');
    table.text('pekxbepzxy');
    table.float('ffakmwhtqv');
  });
  await knex.schema.alterTable('dyopxcxlnf', function(table) {
    table.timestamp('njkwhjykzu');
    table.bigInteger('fjxifqqgdc');
    table.integer('kbyjokhdse');
    table.timestamp('wwsuswvbfe');
    table.integer('whopmgbnvu');
  });
  await knex.schema.alterTable('demzrlloag', function(table) {
    table.bigInteger('rxzrglpvej');
    table.float('qzjryeeneo');
    table.integer('vcaeygkpmh');
    table.json('ifzeoducco');
    table.integer('jgiyyaarib');
    table.integer('lwuljjpsfj');
  });
  await knex.schema.alterTable('ibluydrlhb', function(table) {
    table.boolean('vhbsppzaji');
    table.boolean('hvmapkuitc');
    table.json('enurffzugp');
    table.integer('hzdhcfftdc');
    table.string('asdlbleplq');
  });
  await knex.schema.alterTable('ydjpuciqsw', function(table) {
    table.timestamp('lrgypfmtlz');
    table.float('byyqfbbqed');
    table.text('kdsmsbsqle');
    table.string('knkrkaqghl');
    table.json('qsczxnfcql');
    table.boolean('lukpdrrhym');
    table.string('phaqbjdojl');
    table.string('nraxieifeo');
    table.string('ofmrqgruks');
  });
  await knex.schema.alterTable('ntzcjofybg', function(table) {
    table.timestamp('krhtidpvmr');
    table.float('sjuivuzgev');
    table.bigInteger('rrubdfuttj');
    table.text('evadfbetwh');
    table.text('efhwscpnjw');
    table.boolean('iuzfedowjj');
    table.string('oftizpmydk');
  });
  await knex.schema.alterTable('nrlmuofpxr', function(table) {
    table.string('eezkaxomlf');
    table.integer('uutjvvolgr');
    table.timestamp('yaoftklgnv');
  });
  await knex.schema.alterTable('wejjkwjfot', function(table) {
    table.float('cpfxomqzto');
    table.text('ijytefreir');
    table.string('rdpufxptul');
    table.string('ihzzkqhknw');
    table.json('behwiefhtl');
    table.float('rnappzocif');
  });
  await knex.schema.alterTable('otfiqkzzmn', function(table) {
    table.bigInteger('gfacddjkqa');
    table.string('esjwocfozv');
    table.json('wlfwnknupg');
    table.string('uuvdzwumso');
    table.string('ehgbtzrpxb');
    table.text('mcqjspqzly');
    table.bigInteger('bjeopyqsar');
  });
  await knex.schema.alterTable('cojubglfei', function(table) {
    table.bigInteger('zfaszjdhtb');
    table.boolean('vwgbdwwzro');
    table.integer('jzgnynldqw');
    table.string('ymzrgqtgmi');
    table.bigInteger('rspjshbtdi');
    table.text('wthvwfpbfp');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};