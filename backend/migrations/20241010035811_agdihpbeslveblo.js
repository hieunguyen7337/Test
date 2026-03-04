'use strict';

/**
 * Migration: 20241010035811_agdihpbeslveblo
 * Description: Create table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ivwysluxbz', function(table) {
    table.json('jxhkzydgqo');
    table.boolean('tswlfyhoum');
    table.text('pnafcxizgo');
    table.float('buxvnvcpax');
  });
  await knex.schema.alterTable('xjpzouiocl', function(table) {
    table.string('nzvsphpcev');
    table.text('bafeopjfsf');
    table.json('evkfyrqipa');
    table.bigInteger('navqwetnjb');
  });
  await knex.schema.alterTable('trictikyno', function(table) {
    table.boolean('nrntluwkev');
    table.integer('ebmetgunkr');
    table.timestamp('dqxutalnbu');
    table.boolean('mjkmpjwmmo');
  });
  await knex.schema.alterTable('oxmvmnwiah', function(table) {
    table.float('ehzxrdrpwm');
    table.timestamp('gtspvnltmf');
    table.float('etxplsqgna');
    table.text('gwehqgxhmp');
  });
  await knex.schema.alterTable('dqbjqyvsth', function(table) {
    table.string('gmmecrxslv');
    table.float('nymrsyrriq');
    table.float('dkwvdoghvh');
    table.string('skxqvkjchc');
    table.float('hqgpqqcpvr');
  });
  await knex.schema.alterTable('lpncnxbmkt', function(table) {
    table.bigInteger('ymiipdovjw');
    table.text('dvuotyjjvh');
    table.timestamp('sfdgsnrufu');
    table.text('tzajtalrof');
    table.timestamp('sflsojmpqp');
    table.boolean('acnjyzkkwf');
    table.string('orcmmrlkfw');
    table.integer('iferaynpmo');
  });
  await knex.schema.alterTable('dmdcsuctin', function(table) {
    table.boolean('jvqtjsqicr');
    table.timestamp('zzltqflbmt');
    table.text('fwvjroisyi');
  });
  await knex.schema.alterTable('ateucoxuci', function(table) {
    table.text('pdffpjolok');
    table.bigInteger('supsdtnmjv');
    table.string('vnmshnuksc');
    table.string('fnrqmpysrj');
    table.float('jikfcibbkx');
    table.boolean('ggvtmteawl');
  });
  await knex.schema.alterTable('iltskmrxoq', function(table) {
    table.boolean('dmqvyrdzkw');
    table.string('aphxuwmgai');
    table.text('wdjrciymuv');
    table.integer('evhdavnqgt');
    table.text('mdgcxzhhmx');
    table.timestamp('lxwzegwanb');
    table.float('xivkrbayio');
  });
  await knex.schema.alterTable('ppgrffloku', function(table) {
    table.float('jiksafjjgc');
    table.json('ltpezwsdnu');
    table.json('fwayyfrspg');
    table.string('grwqohdbzm');
    table.float('jkjwfdqdfk');
    table.text('bbgxkrrvsq');
    table.timestamp('nsuzzxzqhj');
    table.timestamp('fujncbcbvm');
  });
  await knex.schema.alterTable('nfmoknvidx', function(table) {
    table.integer('deiyamykzn');
    table.bigInteger('etrjsloqes');
    table.integer('qogfcxcdiu');
  });
  await knex.schema.alterTable('gsarlgnzai', function(table) {
    table.string('lacmogxexb');
    table.bigInteger('zyoebupjjz');
    table.json('sfsfypfvna');
    table.float('axpkcbvmzp');
    table.bigInteger('feswslzotx');
    table.string('rjpcncjphx');
    table.integer('byfmjbqpuz');
    table.timestamp('oxaigcjytc');
    table.integer('fzasyrzzve');
  });
  await knex.schema.alterTable('iwxkaaktxu', function(table) {
    table.boolean('wgsrlfwgwz');
    table.text('bbsmlrhieu');
    table.boolean('qvnvjncdzu');
    table.float('zzmwgyzian');
    table.text('ckmqqgseao');
    table.timestamp('uudkfiluei');
    table.string('lsuxkumjfr');
    table.text('nqzvlkklou');
    table.timestamp('eixpprhomg');
    table.text('lgpkkxogyg');
  });
  await knex.schema.alterTable('bzfquqepoc', function(table) {
    table.timestamp('glcyudptng');
    table.json('pplcjtzxno');
    table.float('uavmujyuzu');
    table.timestamp('tnsmuejqms');
    table.json('upnaeozjrd');
    table.boolean('xwffznsvpw');
    table.float('bbszqzgnsu');
    table.timestamp('azvqhqjwhl');
    table.float('qyedvpvhhe');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};